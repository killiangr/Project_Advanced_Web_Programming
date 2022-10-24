import React,{useState, useEffect} from "react";
import{useHistory, useParams} from "react-router-dom";
import "./AddEdit.css";
import fireDb from "../firebase";
import {toast} from "react-toastify";

const initialState = {
    name: "",
    email: "",
    nbr_reactor: "",
    color: "",
    lenght: ""

}

const AddEdit = () => {
    const [state, setState] = useState(initialState);
    const[data, setData] = useState({});

    const {name, email, nbr_reactor, color, lenght} = state;

    const history = useHistory();

    const {id} = useParams();

    useEffect(() =>{
        fireDb.child("ship").on("value", (snapshot) =>{
            if(snapshot.val()!== null){
                setData({ ...snapshot.val() });
            }
            else {
                setData({});
            }
        });
        return () => {
            setData({})
        };
    }, [id]);

    useEffect(()=>{
        if(id){
            setState({...data[id]});
        }
        else {
            setState({...initialState});
        }

        return ()=>{
            setState({...initialState});
        };
    }, [id, data])

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({...state, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !nbr_reactor || !color || !lenght) {
            toast.error("Please provide value in each input field");
        }
        else {
            if(!id){
                fireDb.child("ship").push(state, (err) => {
                    if(err){
                        toast.error(err);
                    }
                    else {
                        toast.success("Your Ship Added Successfully");
                    } 
                });
            }
            else {
                fireDb.child(`ship/${id}`).set(state, (err) => {
                    if(err){
                        toast.error(err);
                    }
                    else {
                        toast.success("Your Ship Updated Successfully");
                    } 
                });
            }
            
            setTimeout(()=>history.push("/"), 500);
        }
    };

    return (
        <div style={{marginTop: "100px"}}>
            <form 
            style= {{
                margin: "auto", 
                padding: "15px", 
                maxWidth: "400px", 
                alignContent: "center",
                }}
                 onSubmit={handleSubmit}
                >

                <label htmlFor="email">Email ID</label>
                <input
                type="text"
                id="email"
                name="email"
                placeholder="Your Email... "
                value={email || ""}
                onChange={handleInputChange}
                />

                <label htmlFor="name">Ship Name</label>
                <input
                type="text"
                id="name"
                name="name"
                placeholder="Give a name to your Ship... "
                value={name || ""}
                onChange={handleInputChange}
                />

            
                <label htmlFor="nbr_reactor">Number of Reactor</label>
                <input
                type="text"
                id="nbr_reactor"
                name="nbr_reactor"
                placeholder="Number of Reactor... "
                value={nbr_reactor || ""}
                onChange={handleInputChange}
                />

                <label htmlFor="color">Ship Color</label>
                <input
                type="text"
                id="color"
                name="color"
                placeholder="Color of your ship... "
                value={color || ""}
                onChange={handleInputChange}
                />

                <label htmlFor="lenght">Ship Lenght</label>
                <input
                type="text"
                id="lenght"
                name="lenght"
                placeholder="Lenght of your ship... "
                value={lenght || ""}
                onChange={handleInputChange}
                />

                <input type="submit" value={id ? "Update" : "Save"} />
            </form>
            
        </div>
    );
};

export default AddEdit;