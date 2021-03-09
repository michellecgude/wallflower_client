import http from "../../../api_services/data_service";

/* eslint-disable import/no-anonymous-default-export */

// mood routes :
const getAllMoods = () => {
  return http.get("/data/moods");
};

const getSpecificMoods = (id) => {
  return http.get(`/data/moods/${id}`);
};

const createMoods = (data) => {
  return http.post("/data/moods", data);
};

const updateMoods = (data, id) => {
  return http.put(`/data/moods/${data.id}`, data);
};

const deleteMoods = (data, id) => {
  return http.delete(`/data/moods/${data.id}`, data);
};

// habit routes :
const getAllHabits = () => {
  return http.get("/data/habits");
};

const getSpecificHabits = (id) => {
  return http.get(`/data/habits/${id}`);
};

const createHabits = (data) => {
  return http.post("/data/habits", data);
};

const updateHabits = (data, id) => {
  return http.put(`/data/habits/${data.id}`, data);
};

const deleteHabits = (data, id) => {
  return http.delete(`/data/habits/${data.id}`, data);
};

// meditation routes :
const getAllMeditations = () => {
  return http.get("/data/meditations");
};

const getSpecificMeditations = (id) => {
  return http.get(`/data/meditations/${id}`);
};

const createMeditations = (data) => {
  return http.post("/data/meditations", data);
};

const updateMeditations = (data, id) => {
  return http.put(`/data/meditations/${data.id}`, data);
};

const deleteMeditations = (data, id) => {
  return http.delete(`/data/meditations/${data.id}`, data);
};

// uplifting content routes :
const getAllUpliftingContent = () => {
  return http.get("/data/upliftingcontent");
};

const getSpecificUpliftingContent = (id) => {
  return http.get(`/data/upliftingcontent/${id}`);
};

const createUpliftingContent = (data) => {
  return http.post("/data/upliftingcontent", data);
};

const updateUpliftingContent = (data, id) => {
  return http.put(`/data/upliftingcontent/${data.id}`, data);
};

const deleteUpliftingContent = (data, id) => {
  return http.delete(`/data/upliftingcontent/${data.id}`, data);
};

export default {
  //  get
  getAllMoods,
  getAllHabits,
  getAllMeditations,
  getAllUpliftingContent,

  //  get specific
  getSpecificMoods,
  getSpecificHabits,
  getSpecificMeditations,
  getSpecificUpliftingContent,

  //    create
  createMoods,
  createHabits,
  createMeditations,
  createUpliftingContent,

  //   update
  updateMoods,
  updateHabits,
  updateMeditations,
  updateUpliftingContent,

  //   delete
  deleteMoods,
  deleteHabits,
  deleteMeditations,
  deleteUpliftingContent,
};
