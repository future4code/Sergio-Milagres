import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";

const ListTripsPage = () => {
  const [trips, setTrips] = useState([]);
  const history = useHistory();
  const pathParams = useParams();

  useProtectedPage();

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/sergio-milagres-cruz/trips"
      )
      .then((res) => {
        setTrips(res.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const goToTripDetailsPage = (id) => {
    history.push(`/admin/trips/${id}`);
  };

  const goToCreateTripPage = () => {
    history.push("/admin/trips/create");
  };

  const logOut = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  const goHomePage = () => {
    history.push("/");
  };

  return (
    <div>
      <h1>Painel Administrativo</h1>
      <button onClick={goToCreateTripPage}>Criar Viagem</button>
      <button onClick={logOut}>Logout</button>
      <button onClick={goHomePage}>Home</button>
      {trips.map((trip) => {
        return (
          <div>
            <div>
              <button onClick={() => goToTripDetailsPage(trip.id)}>
              <p>{trip.name}</p>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListTripsPage;
