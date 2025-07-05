# String Calculator - TDD Assignment

This project is a implementation of the **String Calculator Kata** using **Test-Driven Development (TDD)**. The target is to follow TDD best practices and build up the solution incrementally using meaningful commits to demonstrate clean, readable, and testable code.

---

## Language & Tools

* **Language**: JavaScript
* **Test Framework**: Jest

---

## How to Run

```bash
# Clone the project
git clone https://github.com/PatelSayam/TDD-Assessment.git

# Navigate into project
cd TDD-Assessment

# Install dependencies
npm install

# Run all tests
npm test
```

---

## Folder Structure

```
TDD-Assessment/
├── src/
│   └── stringCalculator.js      
├── test/
│   └── stringCalculator.test.js
├── package.json
├── package-lock.json
└── README.md
```

---

##  Functions Overview

### `add(str)`

* Accepts a string containing numbers separated by various delimiters.
* Returns the sum of those numbers.
* Validates and handles:

  * Empty strings
  * Default and custom delimiters
  * Negative number exception
  * Numbers > 1000 ignored

---

##  TDD Process & Structure

* Divided all test cases into 2 logical categories for **modularity**:

  1. **Simple Addition** (Core logic tests)
  2. **Addition With Delimiters** (Parsing custom delimiters)

* Followed strict TDD commit process:

  * First: Write **failing test** (commit)
  * Second: Implement feature to pass the test (commit)
  * Third: If needed then refactor (commit)

---

##  PDF Reference

I follows all steps and take all the test cases from the following website for better development and testing.
(https://osherove.com/tdd-kata-1/)
---

##  All Test Cases 

### 1. Addition Logic

* Should return 0 on empty string :

  * `""` → 0

* Should return number itself for single input :

  * `"5"` → 5
  * `"1,"` → 1
    
* Should return sum for two comma seperated numbers :

  * `"1,2"` → 3
  * `"1,2,3"` → 6  
    
* Should return sum for unknown amount of numbers :

  * `"1,2,3,4,5"` → 15
  * `"10,20,30,40"` → 100
      
* Should throw error for negative numbers :

  * `"-2,17"` → Exception: negatives numbers are not allowed -2
  * `"1,4,-7,8"` → Exception: negatives numbers are not allowed -7
  * `"-2,-17"` → Exception: negatives numbers are not allowed -2,-17
  * `"1,-4,-7,8"` → Exception: negatives numbers are not allowed -4.-7
    
* Number bigger than 1000 should be ignored :

  * `"1001,2"` → 2
  * `"1000,2"` → 1002
  * `"2999, 40, 17"` → 57
  * `"4466, 3388, 9999"` → 0

### 2. Delimiters

* Should handle new line as delimeter:

  * `"1\n2,3"` → 6
  * `"1\n2\n3"` → 6
    
* Should handle custome delimeters:

  * `"//;\n1;2"` → 3
  * `"//;\n1;2\n3;4"` → 10
    
* Should handle delimiter having more than one character:

  * `"//[***]\n1***2***3"` → 6
  * `"//[!!]\n4!!5!!6"` → 15
  * `"//[##]\n2##1001##3"` → 5
  * `"//[!!]\n1!!-2!!-3"` → Exception: negatives numbers are not allowed -2
    
* Should handle multiple delimiter having one length:

  * `"//[*][%]\n1*2%3"` → 6
  * `"//[#][%][*]\n3#5%3"` → 11
    
* Should handle Multiple delimiter having more than one length:

  * `"//[***][%%%]\n1***2%%%3"` → 6
  * `"//[**][##]\n1##2**3##1"` → 7

---

##  Screenshot of Passing Tests

![image](https://github.com/user-attachments/assets/772f4dac-a3b6-4a24-ba06-aa2b01e11c79)

---

## Acknowledgements

This project was developed as part of the [Incubyte](https://www.incubyte.co/) Software Craftsmanship recruitment assessment.

---

## Contact

For any queries, feel free to reach out via [Linkedin](https://www.linkedin.com/in/sayam-parejiya-5ba820252/).

Thanks for reviewing!
