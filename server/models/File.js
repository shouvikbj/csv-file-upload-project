// server/models/File.js

class File {
    constructor(name, size, mimeType, path) {
      this.name = name;
      this.size = size;
      this.mimeType = mimeType;
      this.path = path;
    }
  }
  
  module.exports = File;
  