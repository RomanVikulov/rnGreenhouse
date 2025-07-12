import { auth } from '../../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const authSignUpUser =
  ({ email, password, nickname }) =>
  async (dispatch, getState) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      console.log('user', user);
    } catch (error) {
      console.log('error', error);
      console.log('error.message', error.message);
    }
  };

const authSignInUser = () => async (dispatch, getSatte) => {};

const authSignOutUser = () => async (dispatch, getSatte) => {};

export { authSignInUser, authSignUpUser, authSignOutUser };
