var logs = [],
  hook_stream = function (_stream, fn) {
    // Reference default write method
    var old_write = _stream.write;
    // _stream now write with our shiny function
    _stream.write = fn;

    return function () {
      // reset to the default write method
      _stream.write = old_write;
    };
  },
  // hook up standard output
  unhook_stdout = hook_stream(process.stdout, function (string, encoding, fd) {
    logs.push(string);
  });

// unhook later
// unhook_stdout();
