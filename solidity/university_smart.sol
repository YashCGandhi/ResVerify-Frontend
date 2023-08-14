// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UniversityDegree {
    
    struct Student {
        string name;
        string degree;
    }

    address public university;
    mapping(address => Student) public students;

    modifier onlyUniversity() {
        require(msg.sender == university, "Only university can perform this action");
        _;
    }

    constructor() {
        university = msg.sender; // Deploying address is the university
    }

    // Function to add a student and assign a degree
    function addStudentWithDegree(address studentAddress, string memory name, string memory degree) public onlyUniversity {
        students[studentAddress] = Student(name, degree);
    }

    // Function for a student to check their degree
    function checkMyDegree() public view returns(string memory) {
        return students[msg.sender].degree;
    }

    // Function for university to verify a student's degree
    function verifyDegree(address studentAddress) public view onlyUniversity returns(string memory) {
        return students[studentAddress].degree;
    }
}

