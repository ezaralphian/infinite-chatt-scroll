import { GET_CHATT, SET_CHATT } from "../actionTypes";



export const getChatt = () => {
  return dispatch => {
    dispatch({
      type: GET_CHATT,
      data: dummyChatt
    });
  };
};

export const setChatt = data => {
  return dispatch => {
    dispatch({
      type: SET_CHATT,
      data
    });
  };
};

const dummyChatt = [{
  "user": {
    "name": "ujang",
    "id": 2
  },
  "text": "😁😂🤣😭"
}, {
  "user": {
    "name": "udin",
    "id": 1
  },
  "text": "😃😄"
}, {
  "user": {
    "name": "ujang",
    "id": 2
  },
  "text": "@peter4k thanks, I also try this but that's not working inside card so i use \"minWidth\" and \"maxWidth\" and that's working great.😃😄"
}, {
  "user": {
    "name": "udin",
    "id": 1
  },
  "text": "@mvnnn You have to add it to your component, like:\n\n<View style={{flexDirection:'row'}}>\n       <Text style={{flexWrap: 'wrap'}}> You miss fdddddd dddddddd You miss fdddddd dddddddd</Text>\n</View>"
}, {
  "user": {
    "name": "ujang",
    "id": 2
  },
  "text": "@peter4k That's not works in my case.\n\n              <View style={{flexDirection:'row',flexWrap: 'wrap'}}>\n              <Text> You miss fdddddd dddddddd You miss fdddddd dddddddd</Text>\n              </View>"
}, {
  "user": {
    "name": "udin",
    "id": 1
  },
  "text": "Try add flexWrap: \"wrap\" to the style of the Text component"
}, {
  "user": {
    "name": "ujang",
    "id": 2
  },
  "text": "How to break text of flexDirection: row view"
}, {
  "user": {
    "name": "udin",
    "id": 1
  },
  "text": "Thanks for testing & fixing this so fast! Really appreciate it!"
}, {
  "user": {
    "name": "ujang",
    "id": 2
  },
  "text": "@bogdantmm92 - the problem is that it won't wrap because the flexDirection is row - it just continues flowing in that direction rather than downwards (as it would with column). I fixed this for you in this example on rnplay - thanks for providing an excellent sample! Makes the issue much easier to address"
}, {
  "user": {
    "name": "udin",
    "id": 1
  },
  "text": "Demo: https://rnplay.org/plays/21GRFQ"
}, {
  "user": {
    "name": "ujang",
    "id": 2
  },
  "text": "@bogdantmm92 - can you post a complete minimal example on rnplay.org please?"
}, {
  "user": {
    "name": "udin",
    "id": 1
  },
  "text": "http://puu.sh/i407j/805ec722a0.png\nText doesn't wrap when it's wrapped inside :\n\nmsgReceivedAlignContainer: {\n    flex: 1,\n    flexDirection: 'column',\n    alignItems: 'flex-w',\n  },"
}, {
  "user": {
    "name": "ujang",
    "id": 2
  },
  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill"
}, {
  "user": {
    "name": "udin",
    "id": 1
  },
  "text": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}, {
  "user": {
    "name": "ujang",
    "id": 2
  },
  "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
}, {
  "user": {
    "name": "udin",
    "id": 1
  },
  "text": "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}, {
  "user": {
    "name": "ujang",
    "id": 2
  },
  "text": "Ut enim ad minim veniam,"
}, {
  "user": {
    "name": "udin",
    "id": 1
  },
  "text": "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
}, {
  "user": {
    "name": "ujang",
    "id": 2
  },
  "text": "consectetur adipisicing elit, "
}, {
  "user": {
    "name": "udin",
    "id": 1
  },
  "text": "Lorem ipsum dolor sit amet,"
}, {
  "user": {
    "name": "ujang",
    "id": 2
  },
  "text": "H"
}, {
  "user": {
    "name": "udin",
    "id": 1
  },
  "text": "G"
}, {
  "user": {
    "name": "ujang",
    "id": 2
  },
  "text": "Hj"
}]