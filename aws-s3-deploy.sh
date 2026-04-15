#!/usr/bin/env bash
set -euo pipefail

: "${S3_BUCKET:?Please set S3_BUCKET to your bucket name}"
: "${AWS_REGION:?Please set AWS_REGION to your AWS region}"

cd "$(dirname "$0")"

echo "Installing website dependencies..."
npm install

echo "Building website..."
npm run build

echo "Syncing built site to S3 bucket: $S3_BUCKET"
aws s3 sync dist/ "s3://$S3_BUCKET" \
  --acl public-read \
  --delete \
  --cache-control "max-age=31536000" \
  --region "$AWS_REGION"

echo "Website sync complete."

if [ -n "${CLOUDFRONT_ID:-}" ]; then
  echo "Creating CloudFront invalidation for $CLOUDFRONT_ID"
  aws cloudfront create-invalidation \
    --distribution-id "$CLOUDFRONT_ID" \
    --paths "/*"
  echo "Invalidation requested."
fi