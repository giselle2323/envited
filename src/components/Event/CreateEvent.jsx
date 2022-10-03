import * as React from "react";
import * as Yup from "yup";
import { useNavigate, createSearchParams } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import LandingImg from "../../images/create-event.jpg";


function CreateEvent(props) {
    const navigate = useNavigate()
  const validationSchema = Yup.object().shape({
    eventName: Yup.string().required().min(1).label("Event Name"),
    hostName: Yup.string().required().min(1).max(10000).label("Host name"),
    location: Yup.string().required().min(1).max(10000).label("Location"),
    startTime: Yup.string().label("Start Time"),
    endTime: Yup.string().required().nullable().label("End Time"),
    image: Yup.array().min(1, "Please select at least one image"),
  });

  return (
    <div className="container mx-auto flex flex-col md:flex-row bg-backgroundEvent min-h-screen pt-20">
      <div className="flex-1">
        <img src={LandingImg} alt="landing-hero" />
      </div>

      <div className="flex-1">
        <h1 className="text-3xl font-bold text-heading py-8">
          Create an Event
        </h1>
        <Formik
          initialValues={{
            eventName: "",
            hostName: "",
            location: "",
            startTime: "",
            endTime: "",
            image: [],
          }}
          onSubmit={async (values) => {
            navigate({
                pathname: "/event",
                event: createSearchParams({
                    details: values
                }).toString()
            })
          }}
          validationSchema={validationSchema}
        >
          <Form className="text-left px-4">
            <label htmlFor="hostName">First Name</label>
            <Field
              id="hostName"
              name="hostName"
              placeholder="Jane Doe"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
            />

            <label htmlFor="eventName">Last Name</label>
            <Field
              id="eventName"
              name="lastName"
              placeholder="Birthday party"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
            />

            <label htmlFor="location">Location </label>
            <Field
              id="location"
              name="location"
              placeholder="12, Lagos, Nigeria"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
            />

            <label htmlFor="image">Event Image </label>
            <Field
              id="image"
              name="image"
              type="file" 
              accept="image/*"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
            />

            <label htmlFor="startTime">Start Time</label>
            <Field
              id="startTime"
              name="startTime"
              placeholder="8.00am"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
            />

            <label htmlFor="endTime">End Time</label>
            <Field
              id="endTime"
              name="endTime"
              placeholder="12:00pm"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
            />

            <button
              type="submit"
              className="py-4 px-[21px] rounded-[10px] bg-gradient-to-r from-[#8456EC] to-[#E87BF8] "
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default CreateEvent;
