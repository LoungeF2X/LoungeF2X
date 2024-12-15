// This file overwrites the stock UV config.js

self.__uv$config = {
    prefix: "/l2x/isbetter/",
    bare: "/bare/",
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: "/l2x/handler.js",
    client: "/l2x/client.js",
    bundle: "/l2x/bundle.js",
    config: "/l2x/config.js",
    sw: "/l2x/fr.sw.js",
  };