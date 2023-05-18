import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import AbsenceTable from "./AbsenceTable";
import Filter from "./Filter.jsx";

const students = [
    {
        id: 1,
        firstName: "Hans",
        lastName: "Jürgen",
        class: "IM21a",
        latestAbsence: "2023-04-01",
        absenceCount: 3,
        email: "hansjuergen@gmail.com",
        absences: [
            {
                date: "2023-04-01",
                lesson: 4,
                status: "Abwesend",
                reason: "Krank",
            },
            {
                date: "2023-03-28",
                lesson: 2,
                status: "Entschuldigt",
                reason: "Arzttermin",
            },
            {
                date: "2023-03-28",
                lesson: 2,
                status: "Entschuldigt",
                reason: "Arzttermin",
            },
            // Fügen Sie hier weitere Absenz-Objekte hinzu
        ],
    },
    {
        id: 2,
        firstName: "Ben",
        lastName: "Brändle",
        class: "IM21a",
        latestAbsence: "2023-04-01",
        absenceCount: 2,
        email: "max.mustermann@example.com",
        absences: [
            {
                date: "2023-03-28",
                lesson: 2,
                status: "Entschuldigt",
                reason: "Arzttermin",
            },
            
            {
                date: "2023-03-28",
                lesson: 2,
                status: "Entschuldigt",
                reason: "Arzttermin",
            },
            // Fügen Sie hier weitere Absenz-Objekte hinzu
            // Fügen Sie hier weitere Absenz-Objekte hinzu
        ],
    },
    {
        id: 3,
        firstName: "David",
        lastName: "Zettler",
        class: "IM21a",
        latestAbsence: "2023-04-01",
        absenceCount: 3,
        email: "max.mustermann@example.com",
        absences: [
            {
                date: "2023-04-01",
                lesson: 4,
                status: "Abwesend",
                reason: "Krank",
            },
            {
                date: "2023-03-28",
                lesson: 2,
                status: "Entschuldigt",
                reason: "Arzttermin",
            },
            // Fügen Sie hier weitere Absenz-Objekte hinzu
            {
                date: "2023-03-28",
                lesson: 2,
                status: "Entschuldigt",
                reason: "Arzttermin",
            },
            // Fügen Sie hier weitere Absenz-Objekte hinzu
        ],
    },
    {
        id: 4,
        firstName: "Dominic",
        lastName: "Obrist",
        class: "IM21a",
        latestAbsence: "2023-04-01",
        absenceCount: 1,
        email: "max.mustermann@example.com",
        absences: [
            {
                date: "2023-04-01",
                lesson: 4,
                status: "Abwesend",
                reason: "Krank",
            }
        ],
    },
    {
        id: 5,
        firstName: "Alessio",
        lastName: "Lama",
        class: "IM21a",
        latestAbsence: "2023-04-01",
        absenceCount: 0,
        email: "max.mustermann@example.com",
        absences: [
        ],
    },
    // Fügen Sie hier weitere Schüler-Objekte hinzu
];

const StudentTable = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [filteredStudents, setFilteredStudents] = useState(students);
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = () => {
        const searchName = prompt("Suche nach Namen");
        setSearchValue(searchName);
        if (searchName) {
            const filteredStudents = students.filter(
                (student) =>
                    student.firstName
                        .toLowerCase()
                        .includes(searchName.toLowerCase()) ||
                    student.lastName
                        .toLowerCase()
                        .includes(searchName.toLowerCase())
            );
            setFilteredStudents(filteredStudents);
        } else {
            setFilteredStudents(students);
        }
    };
    const handleCancelSearch = () => {
        const searchName = "";
        setSearchValue(searchName);
        if (searchName) {
            const filteredStudents = students.filter(
                (student) =>
                    student.firstName
                        .toLowerCase()
                        .includes(searchName.toLowerCase()) ||
                    student.lastName
                        .toLowerCase()
                        .includes(searchName.toLowerCase())
            );
            setFilteredStudents(filteredStudents);
        } else {
            setFilteredStudents(students);
        }
    };

    const handleClose = () => setShowModal(false);
    const handleShow = (student) => {
        const studentCopy = { ...student, absences: [...student.absences] };
        setSelectedStudent(studentCopy);
        setShowModal(true);
    };

    const addAbsence = (newAbsence) => {
        setSelectedStudent((prevStudent) => ({
            ...prevStudent,
            absences: [...prevStudent.absences, newAbsence],
        }));
    };

    const deleteAbsence = (indexToDelete) => {
        setSelectedStudent((prevStudent) => ({
            ...prevStudent,
            absences: prevStudent.absences.filter(
                (_, index) => index !== indexToDelete
            ),
        }));
    };

    return (
        <div className="container-fluid">
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Profilbild</th>
                        <th scope="col">
                            <div className="flex w-[100%] justify-between">
                                <div>Name</div>
                                <div className="flex items-center">
                                    {searchValue && (
                                        <div className="mr-2">{`Suche nach "${searchValue}"`}</div>
                                    )}
                                    {!searchValue && (
                                        <div
                                        className="bg-blue-200 px-2 rounded-lg hover:cursor-pointer"
                                        onClick={handleSearch}
                                    >
                                        🔍
                                    </div>
                                    )}
                                    {searchValue && (
                                        <div
                                        className="bg-blue-200 px-2 rounded-l-lg hover:cursor-pointer"
                                        onClick={handleSearch}
                                    >
                                        🔍
                                    </div>
                                    )}
                                    {searchValue && (
                                        <div
                                            className="bg-red-200 px-2 rounded-r-lg hover:cursor-pointer"
                                            onClick={handleCancelSearch}
                                        >
                                            ❌
                                        </div>
                                    )}
                                </div>
                            </div>
                        </th>
                        <th scope="col">Klasse</th>
                        <th scope="col">Neuste Absenz</th>
                        <th scope="col">Anzahl Absenzen</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {filteredStudents.map((student, index) => (
                        <tr
                            key={student.id}
                            className={index % 2 === 1 ? "bg-gray-100" : ""}
                        >
                            <td></td>
                            <td
                                className="cursor-pointer text-blue-500 underline"
                                onClick={() => handleShow(student)}
                            >
                                {student.firstName} {student.lastName}
                            </td>
                            <td>{student.class}</td>
                            <td>{student.latestAbsence}</td>
                            <td>{student.absenceCount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal show={showModal} onHide={handleClose} className="modal-lg">
                <Modal.Header closeButton className="custom-close-button">
                    <Modal.Title>
                        {selectedStudent?.firstName} {selectedStudent?.lastName}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <div className="flex">
                                <div
                                    className="bg-gray-300 w-20 h-20 mr-4"
                                    style={{ borderRadius: "25%" }}
                                ></div>
                                <div>
                                    <p>Klasse: {selectedStudent?.class}</p>
                                    <p>Email: {selectedStudent?.email}</p>
                                </div>
                            </div>
                            <h5 className="mt-4 font-bold mb-1">Absenzen:</h5>
                            <AbsenceTable
                                absences={selectedStudent?.absences}
                                addAbsence={addAbsence}
                                deleteAbsence={deleteAbsence}
                            />
                        </div>
                        <div className="ml-[5%] mt-[13.5%] w-[40%]">
                            <p className="font-bold">
                                Filter für Absenzentabelle:
                            </p>
                            <hr />
                            <Filter deleteAbsence={deleteAbsence} />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        className="bg-secondary btn-outline-light text-white hover:bg-primary-dark"
                        onClick={handleClose}
                    >
                        Speichern
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default StudentTable;
