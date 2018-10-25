module.exports = (router) => {
    router.prefix('/api');
    router.use('/recipe', require('./recipe'));
};
