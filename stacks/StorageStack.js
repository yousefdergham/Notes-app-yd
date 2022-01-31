import * as sst from "@serverless-stack/resources";
export default class StorageStack extends sst.Stack {
// Public reference to the table
table;
// Public reference to the bucket
bucket;
constructor(scope, id, props) {
super(scope, id, props);
// Create the DynamoDB table
this.table = new sst.Table(this, "Notes", {
    fields: {
        userId: sst.TableFieldType.STRING,
        noteId: sst.TableFieldType.STRING,
    },
    primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
});
this.bucket = new sst.Bucket(this, "Uploads", {
    s3Bucket: {
      // Allow client side access to the bucket from a different domain
      cors: [
        {
          maxAge: 3000,
          allowedOrigins: ["*"],
          allowedHeaders: ["*"],
          allowedMethods: ["GET", "PUT", "POST", "DELETE", "HEAD"],
        },
      ],
    },
  });

}
}