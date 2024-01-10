/*
Needs globalThis.crypto polyfill. 
This is *not* the crypto you're thinking of.
It's the original crypto...CRYPTOGRAPHY.
*/
import { webcrypto } from 'node:crypto';

// @ts-ignore
if (!globalThis.crypto) globalThis.crypto = webcrypto;

import { Web5 } from '@web5/api';


// CREATE DID
const { web5, did: aliceDid } = await Web5.connect();
// console.log(aliceDid);



// WRITE
const { record } = await web5.dwn.records.create({
    data: 'Hello, Web5!',
    message: {
      dataFormat: 'text/plain',
    },
  });
  console.log('writeResult', record);


//   READ
  const readResult = await record.data.text();
  console.log('readResult', readResult)



// UPDATE
const updateResult = await record.update({
    data: 'Hello, Web5! I am updated.',
  });

  console.log('updateResult', await record.data.text())



//   DELETE
const deleteResult = await web5.dwn.records.delete({
    message: {
      recordId: 'bafyreib6kuvfowg5cwbhxggsd73xcta4kx22sxttj2n3t62mhzcj2gkhau',
    },
  });

  console.log('deleteResult', deleteResult)

