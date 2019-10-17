import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import auth, {firebase} from '@react-native-firebase/auth';

import ValidateAndDisplayMessage from '../../components/validateAndDisplayMessage/ValidateAndDisplayMessage';
import CustomTextInput from '../../components/customTextInput/CustomTextInput';
import StatusDisplay from '../../components/statusDisplay/StatusDisplay';
import PageHeader from '../../components/pageHeader/PageHeader';
import CustomText from '../../components/customText/CustomText';
import Loader from '../../components/loader/Loader';
import Button from '../../components/button/Button';
import CustomRegex from '../../constants/regexType';
import styles from './styles';

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      submissionStatus: false,
      signUpMessageType: 'error',
      signUpMessage: '',
    };

    this.errors = new Set();
  }

  validateAndDisplayMessage(value, name, regex, minLength, maxLength) {
    this.errors.add(name);
    let messageView = ValidateAndDisplayMessage(
      value,
      name,
      regex,
      minLength,
      maxLength,
    );
    if (!messageView) {
      this.errors.delete(name);
    }
    return messageView;
  }

  matchPasswordAndDisplayMessage(password, repassword) {
    this.errors.add("Password Don't Match");
    if (password === repassword) {
      this.errors.delete("Password Don't Match");
      return null;
    }
    return <Text style={styles.error}>*Please Enter Same Passwords</Text>;
  }

  createUser() {
    this.setState({
      submissionStatus: true,
    });
    auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        if (user) {
          firebase
            .auth()
            .currentUser.updateProfile({
              displayName: this.state.name,
            })
            .then(data => {
              if (!firebase.auth().currentUser.emailVerified) {
                this.setState({
                  signUpMessageType: 'success',
                  signUpMessage:
                    'Signup Sucessful ! Please Check Inbox For Verification !',
                  submissionStatus: false,
                });
              }
            });
        }
      })
      .catch(userCreationError => {
        let message = userCreationError.message.split(/\[.*?\]/);
        this.setState({
          signUpMessageType: 'error',
          signUpMessage: message[1],
          submissionStatus: false,
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={styles.formContainer}>
            <PageHeader headerInfo={'Create your account'} />

            <StatusDisplay
              message={this.state.signUpMessage}
              messageType={this.state.signUpMessageType}
            />

            <View>
              <View style={styles.inputGroup}>
                <CustomText textName={'Name'} />
                <CustomTextInput
                  setInputData={data => {
                    this.setState({
                      name: data,
                    });
                  }}
                  placeholderName="Name"
                />
                {this.validateAndDisplayMessage(
                  this.state.name,
                  'Name',
                  CustomRegex.nameWithSpaceInBetween,
                )}
              </View>
              <View style={styles.inputGroup}>
                <CustomText textName={'Email'} />
                <CustomTextInput
                  setInputData={data => {
                    this.setState({
                      email: data,
                    });
                  }}
                  placeholderName="Email"
                  keyboardType={'email-address'}
                />
                {this.validateAndDisplayMessage(
                  this.state.email,
                  'Email',
                  CustomRegex.email,
                )}
              </View>
              <View style={styles.inputGroup}>
                <CustomText textName={'Password'} />
                <CustomTextInput
                  setInputData={data => {
                    this.setState({
                      password: data,
                    });
                  }}
                  placeholderName="Password"
                  secureTextEntry={true}
                />
                {this.validateAndDisplayMessage(
                  this.state.password,
                  'Password',
                )}
              </View>
              <View style={styles.inputGroup}>
                <CustomText textName={'Re-type Password'} />
                <CustomTextInput
                  setInputData={data => {
                    this.setState({
                      rePassword: data,
                    });
                  }}
                  placeholderName="Password Again"
                  secureTextEntry={true}
                />
                {this.validateAndDisplayMessage(
                  this.state.rePassword,
                  'Password Again',
                )}
                {this.matchPasswordAndDisplayMessage(
                  this.state.password,
                  this.state.rePassword,
                )}
              </View>
              <Button
                title={'Signup'}
                style={styles.buttonStyle}
                textStyle={styles.textStyle}
                disable={this.errors.size === 0 ? false : true}
                onPress={this.createUser.bind(this)}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
        <View style={[styles.inputGroup, styles.signupContainer]}>
          <Text style={styles.signupPreText}>Already have an account! </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('SignIn');
            }}>
            <Text style={styles.linkText}>Sign In ></Text>
          </TouchableOpacity>
        </View>

        {this.state.submissionStatus ? <Loader /> : null}
      </View>
    );
  }
}
