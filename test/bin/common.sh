export PROJECT="$(dirname $0)/.."
export SDK="$(dirname $0)/../sdk"
if [ -f "$(dirname $0)/.sdk.env" ]; then
  source $(dirname $0)/.sdk.env
fi
export SCBUILD=$SDK/build
if [ -f "$SDK/build.local/gitbash.env" ]; then
  source $SDK/build.local/gitbash.env
fi
export ANTJAR="$SDK/build/lib/ant-launcher.jar"


if [ -f "$(dirname $0)/.env" ]; then
  source $(dirname $0)/.env
fi
