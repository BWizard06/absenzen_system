import React, { useState } from "react";
import { Button } from "react-bootstrap";

const AbsenceTable = ({ absences, addAbsence, deleteAbsence }) => {
    const [newAbsence, setNewAbsence] = useState({
        date: "",
        lesson: "",
        status: "",
        reason: "",
    });

    const handleChange = (e) => {
        setNewAbsence({ ...newAbsence, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            newAbsence.date &&
            newAbsence.lesson &&
            newAbsence.status &&
            newAbsence.reason
        ) {
            addAbsence(newAbsence);
            setNewAbsence({ date: "", lesson: "", status: "", reason: "" });
        } else {
            alert("Bitte füllen Sie alle Felder aus.");
        }
    };

    return (
        <div>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr className="bg-gray-100">
                        <th>Datum</th>
                        <th>Lektionen</th>
                        <th>Status</th>
                        <th>Grund</th>
                        <th>Aktion</th>
                    </tr>
                </thead>
                <tbody>
                    {absences.map((absence, index) => (
                        <tr key={index}>
                            <td>{absence.date}</td>
                            <td>{absence.lesson}</td>
                            <td>{absence.status}</td>
                            <td>{absence.reason}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteAbsence(index)}
                                >
                                    Löschen
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h5 className="mt-5 font-bold">Neue Absenz hinzufügen:</h5>
            <form onSubmit={handleSubmit} className="mt-1">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Datum:</label>
                            <input
                                type="date"
                                name="date"
                                value={newAbsence.date}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Anzahl Lektionen:</label>
                            <input
                                type="number"
                                name="lesson"
                                value={newAbsence.lesson}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Status:</label>
                            <select
                                name="status"
                                value={newAbsence.status}
                                onChange={handleChange}
                                className="form-control"
                            >
                                <option value="">--Status auswählen--</option>
                                <option value="Abwesend">Abwesend</option>
                                <option value="Entschuldigt">
                                    Entschuldigt
                                </option>
                                <option value="Unentschuldigt">
                                    Unentschuldigt
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Grund:</label>
                            <input
                                type="text"
                                name="reason"
                                value={newAbsence.reason}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <Button
                                type="submit "
                                className="bg-primary mt-2 text-white hover:bg-primary-dark"
                            >
                                Hinzufügen
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AbsenceTable;
