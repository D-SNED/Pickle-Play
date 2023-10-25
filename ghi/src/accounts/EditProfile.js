import React, { useState, useEffect } from "react";
import "./styles/styles.css";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [gender, setGender] = useState("");
  const [skillLevelSingles, setSkillLevelSingles] = useState("");
  const [skillLevelDoubles, setSkillLevelDoubles] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [emergencyContactName, setEmergencyContactName] = useState("");
  const [emergencyContactNum, setEmergencyContactNum] = useState("");
  const [playerId, setPlayerId] = useState(0);

  const genderCategories = [
    { value: "Male" },
    { value: "Female" },
    { value: "Non-Binary" },
    { value: "Other" },
  ];

  const skillLevels = [
    { value: "2.00" },
    { value: "2.25" },
    { value: "2.50" },
    { value: "2.75" },
    { value: "3.00" },
    { value: "3.25" },
    { value: "3.50" },
    { value: "3.75" },
    { value: "4.00" },
    { value: "4.25" },
    { value: "4.50" },
    { value: "4.75" },
    { value: "5.00" },
    { value: "5.25" },
    { value: "5.50" },
    { value: "5.75" },
    { value: "6.00" },
  ];

  const getPlayerData = async (playerId) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_HOST}/api/players/${playerId}`,
      { credentials: "include" }
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setUsername(data["username"]);
      setEmail(data["email"]);
      setBirthdate(data["birthdate"]);
      data["first_name"] !== null
        ? setFirstName(data["first_name"])
        : setFirstName("");
      data["last_name"] !== null
        ? setLastName(data["last_name"])
        : setLastName("");
      data["phone_number"] !== null
        ? setPhoneNumber(data["phone_number"])
        : setPhoneNumber("");
      data["profile_picture"] !== null
        ? setProfilePicture(data["profile_picture"])
        : setProfilePicture("");
      data["gender"] !== null ? setGender(data["gender"]) : setGender("");
      data["skill_level_singles"] !== null
        ? setSkillLevelSingles(data["skill_level_singles"])
        : setSkillLevelSingles(null);
      data["skill_level_doubles"] !== null
        ? setSkillLevelDoubles(data["skill_level_doubles"])
        : setSkillLevelDoubles(null);
      setIsAdmin(data["is_admin"]);
      data["emergency_contact_fullname"] !== null
        ? setEmergencyContactName(data["emergency_contact_fullname"])
        : setEmergencyContactName("");
      data["emergency_contact_phone_number"] !== null
        ? setEmergencyContactNum(data["emergency_contact_phone_number"])
        : setEmergencyContactNum("");
    }
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleBirthdateChange = (e) => {
    const value = e.target.value;
    setBirthdate(value);
  };

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    setFirstName(value);
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    setLastName(value);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
  };

  const handleProfilePictureChange = (e) => {
    const value = e.target.value;
    setProfilePicture(value);
  };

  const handleGenderChange = (e) => {
    const value = e.target.value;
    setGender(value);
  };

  const handleSkillLevelSingles = (e) => {
    const value = e.target.value;
    setSkillLevelSingles(value);
  };

  const handleSkillLevelDoubles = (e) => {
    const value = e.target.value;
    setSkillLevelDoubles(value);
  };

  const handleEmergencyContactNameChange = (e) => {
    const value = e.target.value;
    setEmergencyContactName(value);
  };

  const handleEmergencyContactNumChange = (e) => {
    const value = e.target.value;
    setEmergencyContactNum(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};

    data.username = username;
    data.password = password;
    data.email = email;
    data.birthdate = birthdate;
    data.first_name = firstName;
    data.last_name = lastName;
    data.phone_number = phoneNumber;
    data.profile_picture = profilePicture;
    data.gender = gender;
    data.skill_level_singles = skillLevelSingles;
    data.skill_level_doubles = skillLevelDoubles;
    data.is_admin = isAdmin;
    data.emergency_contact_fullname = emergencyContactName;
    data.emergency_contact_phone_number = emergencyContactNum;

    const profileUrl = `${process.env.REACT_APP_API_HOST}/api/players/${playerId}`;
    const fetchConfig = {
      method: "PUT",
      credentials: "include",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(profileUrl, fetchConfig);

    if (response.ok) {
      setUsername("");
      setPassword("");
      setEmail("");
      setBirthdate("");
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setProfilePicture("");
      setGender("");
      setSkillLevelSingles("");
      setSkillLevelDoubles("");
      setEmergencyContactName("");
      setEmergencyContactNum("");

      navigate("/profile");
    }
  };

  useEffect(() => {
    const getPlayerId = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_HOST}/token`, {
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        if (data === null) {
          navigate("/login");
        } else {
          setPlayerId(data.account.id);
        }
      }
    };

    getPlayerId();

    if (playerId !== 0) {
      getPlayerData(playerId);
    }
  }, [playerId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="bg-green flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight">
          Edit Profile Information
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmit}
          className="rounded-md space-y-6 bg-slate-50 p-4"
          id="edit-profile"
        >
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                onChange={handleUsernameChange}
                value={username}
                id="username"
                name="username"
                type="text"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                onChange={handlePasswordChange}
                value={password}
                id="password"
                name="password"
                type="password"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                onChange={handleEmailChange}
                value={email}
                id="email"
                name="email"
                type="text"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="birthdate"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Birthdate
            </label>
            <div className="mt-2">
              <input
                onChange={handleBirthdateChange}
                value={birthdate}
                id="birthdate"
                name="birthdate"
                type="date"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First Name
            </label>
            <div className="mt-2">
              <input
                onChange={handleFirstNameChange}
                value={firstName}
                id="first-name"
                name="first-name"
                type="text"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last Name
            </label>
            <div className="mt-2">
              <input
                onChange={handleLastNameChange}
                value={lastName}
                id="last-name"
                name="last-name"
                type="text"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="phone-number"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone Number
            </label>
            <div className="mt-2">
              <input
                onChange={handlePhoneNumberChange}
                value={phoneNumber}
                id="phone-number"
                name="phone-number"
                type="text"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="profile-picture"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Profile Picture Url
            </label>
            <div className="mt-2">
              <input
                onChange={handleProfilePictureChange}
                value={profilePicture}
                id="profile-picture"
                name="profile-picture"
                type="text"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Gender
            </label>
            <div className="mt-2">
              <select
                onChange={handleGenderChange}
                value={gender}
                id="gender"
                name="gender"
                type="text"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Select Gender</option>
                {genderCategories.map((g) => {
                  return (
                    <option key={g.value} value={g.value}>
                      {g.value}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="skill-level-singles"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Skill Level Singles
            </label>
            <div className="mt-2">
              <select
                onChange={handleSkillLevelSingles}
                value={skillLevelSingles}
                id="skill-level-singles"
                name="skill-level-singles"
                type="number"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Select Skill Level</option>
                {skillLevels.map((s) => {
                  return (
                    <option key={s.value} value={s.value}>
                      {s.value}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="skill-level-doubles"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Skill Level Doubles
            </label>
            <div className="mt-2">
              <select
                onChange={handleSkillLevelDoubles}
                value={skillLevelDoubles}
                id="skill-level-doubles"
                name="skill-level-doubles"
                type="number"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Select Skill Level</option>
                {skillLevels.map((s) => {
                  return (
                    <option key={s.value} value={s.value}>
                      {s.value}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="emergency-contact-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Emergency Contact Name
            </label>
            <div className="mt-2">
              <input
                onChange={handleEmergencyContactNameChange}
                value={emergencyContactName}
                id="emergency-contact-name"
                name="emergency-contact-name"
                type="text"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="emergency-contact-num"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Emergency Contact Phone Number
            </label>
            <div className="mt-2">
              <input
                onChange={handleEmergencyContactNumChange}
                value={emergencyContactNum}
                id="emergency-contact-num"
                name="emergency-contact-num"
                type="text"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#C14533] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#d4402a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
