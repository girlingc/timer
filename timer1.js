let args = process.argv.splice(2);
let delay = args[0];

for (let i = 0; i < args.length; i++) {
  if (args[i] >= 0) {
    setTimeout(() => {
      process.stdout.write('hello \r\n');
    }, args[i] * 1000);
    delay += args[i + 1] - args[i];
  }
}