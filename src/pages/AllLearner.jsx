import React, { useState } from "react";

const LearnersTable = () => {
  // Example data for learners
  const [learners, setLearners] = useState([
    { email: "sneha@learnyst.com", mobile: "-", lastLogin: "07 Aug 2024", totalSpent: "-", signedUpon: "07 Aug 2024" },
    { email: "anujguptacgc@gmail.com", mobile: "-", lastLogin: "01 Aug 2024", totalSpent: "-", signedUpon: "01 Aug 2024" },
    { email: "anujgupta3391@gmail.com", mobile: "+919216558059", lastLogin: "06 Sep 2024", totalSpent: "₹0", signedUpon: "14 Apr 2024" },
    // Add more learners here if needed
  ]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = learners.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">All Learners</h1>
      <div className="mb-4">
        <button className="btn">Export</button>
        <button className="btn">Create Group</button>
        <button className="btn">Send Message</button>
      </div>
      <table className="min-w-full border-collapse block md:table">
        <thead>
          <tr className="block md:table-row">
            <th className="text-left p-2 md:table-cell">Email</th>
            <th className="text-left p-2 md:table-cell">Mobile</th>
            <th className="text-left p-2 md:table-cell">Last Login</th>
            <th className="text-left p-2 md:table-cell">Total Spent</th>
            <th className="text-left p-2 md:table-cell">Signed Upon</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((learner, index) => (
            <tr key={index} className="block md:table-row">
              <td className="p-2 md:table-cell">{learner.email}</td>
              <td className="p-2 md:table-cell">{learner.mobile}</td>
              <td className="p-2 md:table-cell">{learner.lastLogin}</td>
              <td className="p-2 md:table-cell">{learner.totalSpent}</td>
              <td className="p-2 md:table-cell">{learner.signedUpon}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="mr-2">
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage >= Math.ceil(learners.length / rowsPerPage)} className="ml-2">
          Next
        </button>
      </div>
    </div>
  );
};

export default LearnersTable;
