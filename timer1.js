let args = process.argv.splice(2)
delay = args[0]

for (i = 0;i < args.length; i++) {
  if (args[i] >= 0) {
    setTimeout(() => {
      process.stdout.write('hello \r\n');
    }, args[i] * 1000);
    delay += args[i+1] - args[i];
  }
}