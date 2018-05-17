export default{
	headerShow(state){
		state.header=true;
	},
	headerHide(state){
		state.header=false;
	},
	footerShow(state){
		state.footer=true;
	},
	footerHide(state){
		state.footer=false;
	},
	loadShow(state){
		state.loader=true;
	},
	loadHide(state){
		state.loader=false;
	}

}