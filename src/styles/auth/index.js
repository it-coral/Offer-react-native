import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },

  welcomeText: {
    fontWeight: "700",
    fontSize: 32,
    marginTop: 5,
    marginBottom: 100,
    color: "rgb(10,39,106)",
    textAlign: "center"
  },

  subText: {
    fontWeight: "400",
    fontSize: 15,
    marginTop: 8,
    marginBottom: 8,
    color: "#a4a4a4",
    textAlign: "center"
  },

  btnContainer: {
    borderRadius: 4,
    marginTop: 10,
  },

  button: {
    height: 45,
    backgroundColor: "rgb(83,182,249)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },

  buttonText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 15,
    color: "#fff",
  },

  bordered: {
    borderWidth: 1,
    borderColor: "rgb(83,182,249)",
    backgroundColor: "#fff",
  },

  mainColor: {
    color: "rgb(83,182,249)",
  }

});