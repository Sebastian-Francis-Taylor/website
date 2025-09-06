#!/bin/bash
# Usage: bash generate-favicons.sh master.png

set -e

if [ -z "$1" ]; then
  echo "Usage: $0 master.png"
  exit 1
fi

MASTER="$1"

echo "Generating favicons from $MASTER ..."

ffmpeg -y -i "$MASTER" -vf scale=16:16 -pix_fmt rgba favicon-16x16.png
ffmpeg -y -i "$MASTER" -vf scale=32:32 -pix_fmt rgba favicon-32x32.png
ffmpeg -y -i "$MASTER" -vf scale=180:180 -pix_fmt rgba apple-touch-icon.png
ffmpeg -y -i "$MASTER" -vf scale=192:192 -pix_fmt rgba android-chrome-192x192.png
ffmpeg -y -i "$MASTER" -vf scale=512:512 -pix_fmt rgba android-chrome-512x512.png
ffmpeg -y -i "$MASTER" -vf scale=16:16 -pix_fmt rgba favicon-16.png
ffmpeg -y -i "$MASTER" -vf scale=32:32 -pix_fmt rgba favicon-32.png
ffmpeg -y -i "$MASTER" -vf scale=48:48 -pix_fmt rgba favicon-48.png
ffmpeg -y -i favicon-16.png -i favicon-32.png -i favicon-48.png favicon.ico
rm favicon-16.png favicon-32.png favicon-48.png

echo "✅ Favicons generated with transparency preserved!"
