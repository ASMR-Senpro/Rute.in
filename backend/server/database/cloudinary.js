const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dytkek8pe',
    api_key: '772329352818685',
    api_secret: 'pOIpHbNF8Z-tFJyC06tC_FNUMRc'
});

module.exports = cloudinary;