// @netlify-schedule: @daily
const https = require('https');
exports.handler = async function() {
  const url = new URL(process.env.SUPABASE_URL + '/rest/v1/cycle_settings?select=id&limit=1');
  return new Promise((resolve) => {
    const req = https.request({
      hostname: url.hostname,
      path: url.pathname + url.search,
      headers: {'apikey': process.env.SUPABASE_ANON_KEY, 'Authorization': 'Bearer ' + process.env.SUPABASE_ANON_KEY}
    }, () => resolve({statusCode:200,body:'ok'}));
    req.on('error', () => resolve({statusCode:500,body:'error'}));
    req.end();
  });
};
