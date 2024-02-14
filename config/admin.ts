export default ({ env }) => ({
  url: "http://strapidemo-admin.s3-website-us-east-1.amazonaws.com",
  serveAdminPanel: env.bool('SERVE_ADMIN', false),
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
