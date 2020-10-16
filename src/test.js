import firebase from 'firebase/app';
import 'firebase/firestore';


const firestore = firebase.firestore();

firestore.collection('users').doc('NxlsgX346FcpPAV0HTSg').collection('cartItems').doc('YQvkCWeHbwY6CuMxfadL');
firestore.doc('/users/NxlsgX346FcpPAV0HTSg/cartItems/QvkCWeHbwY6CuMxfadL');
cosnsole.log(firestore.collection('/users/NxlsgX346FcpPAV0HTSg/cartItems'));