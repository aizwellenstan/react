import * as express from 'express';
// import * as request from 'request';
// import * as fetch from 'node-fetch'
// // import { RESOURCE_HOST, RESOURCE_PROTOCOL } from '../config';

// import { RESOURCE_PROTOCOL } from '../config';

const router = express.Router();

// Bind /api/* to original API server
// router.use('/api', (req, res) => {
//   const boundPath = `${RESOURCE_PROTOCOL}://${RESOURCE_HOST}${req.path}`;
//   req.pipe(request(boundPath)).pipe(res);
// });

router.use('/assets', async (req, res) => {
  // const boundPath: string = `${RESOURCE_PROTOCOL}://${RESOURCE_HOST}${req.path}`;
  // const boundPath: string = `https://api.github.com${req.path}`
  var query = '';
  for (let key in req.query) {
    query += `${key}=${req.query[key]}&`;
  }
  const boundPath: string = `https://product.nadi3docms.com/nadidemo3/assets${
    req.path
  }?${query}`;
  const response = await fetch(boundPath);
  const json = await response.json();
  res.json(json);
});

export const dataSources = router;
