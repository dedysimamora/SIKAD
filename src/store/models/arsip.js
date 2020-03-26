import store from "../store";

import AllService from "../../Service/allService";

export default {
    state: {
        data: null,
        fetching: false,
        fetched: false,
        error: null
    },
    reducers: {
        arsip_Request(state) {
            return {
                ...state,
                fetching: true,
                fetched: false,
                error: null
            };
        },
        arsip_Success(state, payload) {
            return {
                ...state,
                data: payload,
                fetching: false,
                fetched: true,
                error: null
            };
        },
        arsip_Failure(state, payload) {
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: payload
            };
        }
    },
    effects: {
        async getAllArsip() {
            try {
                let AllArsip = {};

                await this.arsip_Request();

                AllArsip = await AllService.getAllArsip();

                await this.arsip_Success(AllArsip);
            } catch (error) {
                    await this.arsip_Failure({error});
                    // await store.dispatch.modal.setModal({
                    //     apiError: error.response.data.apierror,
                    //     customModal: {
                    //         mainButton: {
                    //             title: "OK",
                    //             actionOnClick: "goBackToDashboard"
                    //         }
                    //     }
                    // });
                
            }
        }
    }
};
