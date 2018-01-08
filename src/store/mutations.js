import getters from './getters';
import state from './state';


const mutations={
	footerHide(state){
		state.footer=false;
	},
	footerShow(state){
		state.footer=true;
	},
	headerCommon(state){
		state.header=true;
	},
	headerActive(state){
		state.header=false;
	}
}

export default{
	state,
	mutations,
	getters
}
