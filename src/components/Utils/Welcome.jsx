import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData, updateUserData } from '../../services/userDataAPI'; 
import { GET_USER_PROFILE, UPDATE_FIRSTNAME, UPDATE_LASTNAME } from '../../reducers/getUserReducer';

export default function Welcome() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const userData = useSelector(state => state.getUser.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUserData = await getUserData(dispatch);
      if (fetchedUserData) {
        dispatch(GET_USER_PROFILE(fetchedUserData.body));
        setFirstNameInput(fetchedUserData.body.firstName);
        setLastNameInput(fetchedUserData.body.lastName);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    console.log('Canceling edit...');
    setIsEditing(false);
    setFirstNameInput(userData.firstName);
    setLastNameInput(userData.lastName);
  };

  const handleSaveClick = async (e) => {
    e.preventDefault();

    dispatch(UPDATE_FIRSTNAME(firstNameInput));
    dispatch(UPDATE_LASTNAME(lastNameInput));

     await updateUserData({ firstName: firstNameInput, lastName: lastNameInput });

      setIsEditing(false);
    
  };


  return (
    <div className="header-edit">
      <h1>Welcome back</h1> 

      <div className="editName">
        {!isEditing ? (
          <div className="content-edit">
            <h1 className="edit-name-wrapper">{userData ? `${userData.firstName} ${userData.lastName}` : '!'}</h1>
            <button className="edit-button edit-name-wrapper" onClick={handleEditClick}>Edit Name</button>
          </div>
        ) : (
          <form onSubmit={handleSaveClick} className='edit-name-form'>
            <div className="edit-name-wrapper">
              <input
                type="text"
                name="first name"
                id="firstName"
                className="input-field"
                placeholder={firstNameInput}
                onChange={(e) => setFirstNameInput(e.target.value)}
              />
              <input
                type="text"
                name="last name"
                id="lastName"
                className="input-field"
                placeholder={lastNameInput}
                onChange={(e) => setLastNameInput(e.target.value)}
              />
            </div>
            <div className='edit-button-wrapper'>
              <button type="submit" className='edit-button'>Save</button>
              <button type="button" className='edit-button' onClick={handleCancelClick}>Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
