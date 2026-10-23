const { test } = require('node:test');
const assert = require('node:assert/strict');
const app = require('../server');

test('Changing the admin password rejects old credentials and revokes other sessions', async () => {
  const server = app.listen(0, '127.0.0.1');
  await new Promise(resolve => server.once('listening', resolve));
  const base = `http://127.0.0.1:${server.address().port}/api/auth`;
  async function request(path, body, token) {
    const response = await fetch(base + path, {
      method: body ? 'POST' : 'GET',
      headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
      ...(body ? { body: JSON.stringify(body) } : {}),
    });
    return { status: response.status, data: await response.json() };
  }
  try {
    const credentials = { email: 'admin@tms.edu.vn', password: 'admin123' };
    const first = await request('/login', credentials);
    const second = await request('/login', credentials);
    assert.equal(first.status, 200);
    assert.equal(second.status, 200);
    const token = first.data.accessToken;
    assert.equal((await request('/change-password', { newPassword: 'Updated@123456' }, token)).status, 400);
    assert.equal((await request('/change-password', { currentPassword: 'wrong', newPassword: 'Updated@123456' }, token)).status, 400);
    assert.equal((await request('/change-password', { currentPassword: 'admin123', newPassword: 'short' }, token)).status, 400);
    assert.equal((await request('/change-password', { currentPassword: 'admin123', newPassword: 'Updated@123456' }, token)).status, 200);
    for (const password of ['admin123', 'admin', '123456', 'Admin@123', 'Admin@123456']) {
      assert.equal((await request('/login', { ...credentials, password })).status, 401);
      require('../data/store').clearFailedAttempts(credentials.email);
    }
    assert.equal((await request('/login', { ...credentials, password: 'Updated@123456' })).status, 200);
    assert.equal((await request('/profile', null, second.data.accessToken)).status, 401);
    assert.equal((await request('/profile', null, token)).status, 200);
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
});
