import Vue from 'vue'
import VueSocketio from 'vue-socket.io'
import socketio from 'socket.io-client'
import env from '../../env'
Vue.use(VueSocketio, socketio(env.SOCKET_CONNECT, {'transports': ['websocket', 'polling']}))
