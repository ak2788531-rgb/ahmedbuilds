import https from 'https';

https.get('https://ibb.co/0pYcNSRc', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/<meta property="og:image" content="(.*?)"/);
    console.log("IMAGE URL:", match ? match[1] : 'not found');
  });
});
