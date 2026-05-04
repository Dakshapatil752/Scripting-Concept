import 'dart:io';

void main() {
  try {
    stdout.write("Enter a number: ");
    int num = int.parse(stdin.readLineSync()!);

    if (num == 0) {
      throw Exception("Number should not be zero");
    }

    print("Valid Number: $num");
  } catch (e) {
    print("Error: $e");
  } finally {
    print("Execution completed");
  }
}