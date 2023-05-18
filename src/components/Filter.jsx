import React from "react";
import { Button } from "react-bootstrap";

const Filter = ({ deleteAbsence }) => {
    const disableNonWednesdays = (date) => {
        const day = date.getDay();
        return day !== 3;
    };

    const handleChange = (e) => {
        if (disableNonWednesdays(new Date(e.target.value))) {
            e.target.setCustomValidity("Please select a Wednesday");
        } else {
            e.target.setCustomValidity("");
        }
    };

    return (
        <div className="mt-1 w-[100%]">
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Von:</label>
                        <input
                            type="date"
                            name="date"
                            className="form-control"
                            min={new Date().toISOString().split("T")[0]}
                            onInput={handleChange}
                            step="7"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Bis:</label>
                        <input
                            type="date"
                            className="form-control"
                            min={new Date().toISOString().split("T")[0]}
                            onInput={handleChange}
                            step="7"
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Lektionen:</label>
                        <input
                            type="number"
                            name="lesson"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Status:</label>
                        <select name="status" className="form-control">
                            <option value="">--Status--</option>
                            <option value="Abwesend">Abwesend</option>
                            <option value="Entschuldigt">Entschuldigt</option>
                            <option value="Unentschuldigt">
                                Unentschuldigt
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Grund:</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <Button
                            type="submit "
                            className="bg-primary text-white hover:bg-primary-dark mt-4 w-[100%]"
                        >
                            Filtern
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;
