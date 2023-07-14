/**
 * Error Component
 *
 */

// import { } from 're'

const Error = ({ error }) => {
  return (
    <div className="min-h-min border border-red-800 rounded p-4 m-auto w-[80%] mb-4">
      <div className="text-red-800">
        <p> There was a problem </p>
       {error &&  <small>{error} </small> }
      </div>
    </div>
  );
};

export default Error;
