# Broker Bridge Website

Static landing page for Broker Bridge. This site can be deployed to AWS S3 as a static site and optionally served through CloudFront.

## AWS S3 Deployment
1. Create an S3 bucket with static website hosting enabled.
2. Configure the bucket for public access or use CloudFront with an origin access identity.
3. Set environment variables:
   - `S3_BUCKET` = your bucket name
   - `AWS_REGION` = your AWS region
   - optionally `CLOUDFRONT_ID` = CloudFront distribution ID
4. Run:
   ```bash
   ./aws-s3-deploy.sh
   ```

## GitHub Auto Deploy to S3
If you want the website to deploy automatically on pushes to `main`, set these GitHub secrets in the repository:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `S3_BUCKET`

Then enable the workflow file:
- `.github/workflows/aws-s3-deploy.yml`

## Local Build
```bash
npm install
npm run build
```
