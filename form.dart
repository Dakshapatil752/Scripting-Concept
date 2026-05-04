import 'dart:io';

void main() {
  stdout.write("Enter Name: ");
  String name = stdin.readLineSync()!;

  stdout.write("Enter Age: ");
  int age = int.parse(stdin.readLineSync()!);

  stdout.write("Enter Email: ");
  String email = stdin.readLineSync()!;

  print("\n--- User Data ---");
  print("Name: $name");
  print("Age: $age");
  print("Email: $email");
}