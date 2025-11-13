import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  endpoint: "http://data-209.38.57.64.sslip.io",
  region: "us-east-1",
  credentials: {
    accessKeyId: "minioadmin",
    secretAccessKey: "minioadmin123",
  },
  forcePathStyle: true, // Important for MinIO
});

const res = await s3.send(new ListBucketsCommand({}));
console.log(res.Buckets);
