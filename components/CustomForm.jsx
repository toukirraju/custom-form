"use client";
import { useFormik } from "formik";

const CustomForm = () => {
  const initialValues = {
    container: {
      width: "100%",
      input_view: "vertical",
      display: "flex",
      flexDirection: "column",
      padding: "4px",
    },
    label: {
      color: "lightgray",
    },
    input: {
      background: "transparent",
      border: "none",
      borderBottom: "1px dotted white",
      padding: "0 5px",
      color: "lightgray",
    },
    button: {
      padding: "0 5px",
      color: "lightgray",
    },
    width: "100%",
    input_view: "vertical",
    display: "flex",
    margin: "400px",
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  // Function to render form fields with labels for properties
  const renderFields = (fieldType, initials) => {
    return (
      <div>
        {typeof initials[fieldType] === "object" ? (
          // Render heading for object and its nested properties
          <>
            {/* {Object.keys(initials[fieldType]).map((nestdKey) =>
              console.log(nestdKey)
            )} */}

            <h3 className="bg-green-300 text-teal-950">{fieldType}</h3>
            {Object.keys(initials[fieldType]).map((nestedKey) => (
              <div key={nestedKey}>
                <label>{nestedKey}</label>
                <input
                  name={`${fieldType}.${nestedKey}`}
                  type="text"
                  placeholder={nestedKey}
                  onChange={formik.handleChange}
                  value={formik.values[fieldType][nestedKey]}
                />
              </div>
            ))}
            {/* {Object.keys(styleObj[key]).map((nestedKey) => (
              <div key={nestedKey}>
                <label>{nestedKey}</label>
                <input
                  name={`${fieldType}.${key}.${nestedKey}`}
                  type="text"
                  placeholder={nestedKey}
                  onChange={formik.handleChange}
                  value={formik.values[fieldType][key][nestedKey]}
                />
              </div>
            ))} */}
          </>
        ) : (
          // Render label and input field for non-object properties
          <>
            <label>{fieldType}</label>
            <input
              name={`${fieldType}`}
              type="text"
              placeholder={fieldType}
              onChange={formik.handleChange}
              value={formik.values[fieldType]}
            />
          </>
        )}
      </div>
    );

    // return Object.keys(styleObj).map((key) => (
    //   <div key={key}>
    //     {console.log(typeof styleObj)}
    //     {typeof styleObj === "object" ? (
    //       // Render heading for object and its nested properties
    //       <>
    //         <h3 className="bg-green-300 text-teal-950">{key}</h3>
    //         {Object.keys(styleObj[key]).map((nestedKey) => (
    //           <div key={nestedKey}>
    //             <label>{nestedKey}</label>
    //             <input
    //               name={`${fieldType}.${key}.${nestedKey}`}
    //               type="text"
    //               placeholder={nestedKey}
    //               onChange={formik.handleChange}
    //               value={formik.values[fieldType][key][nestedKey]}
    //             />
    //           </div>
    //         ))}
    //       </>
    //     ) : (
    //       // Render label and input field for non-object properties
    //       <>
    //         {/* <label>{key}</label>
    //         <input
    //           name={`${fieldType}.${key}`}
    //           type="text"
    //           placeholder={key}
    //           onChange={formik.handleChange}
    //           value={formik.values[fieldType][key]}
    //         /> */}
    //       </>
    //     )}
    //   </div>
    // )
    // );
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      {Object.keys(initialValues).map((fieldType) => (
        <div key={fieldType}>{renderFields(fieldType, initialValues)}</div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomForm;
