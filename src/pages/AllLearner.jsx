import React, { useState, useEffect } from "react";

const learnersData = [
  { id: 1, name: "John Doe", email: "john@example.com", progress: "80%" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", progress: "50%" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", progress: "90%" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", progress: "60%" },
  { id: 5, name: "Charlie Black", email: "charlie@example.com", progress: "70%" },
  // Add more learners as needed
];

const LearnerTable = () => {
  const [learners, setLearners] = useState(learnersData);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [currentPage, setCurrentPage] = useState(1);
  const [learnersPerPage] = useState(5); // Set how many learners per page

  // Filter learners based on search term
  useEffect(() => {
    if (searchTerm === "") {
      setLearners(learnersData);
    } else {
      setLearners(
        learnersData.filter((learner) =>
          learner.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm]);

  // Sort learners based on the sort config
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedLearners = React.useMemo(() => {
    if (sortConfig.key !== null) {
      const sorted = [...learners].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
      return sorted;
    }
    return learners;
  }, [learners, sortConfig]);

  // Pagination logic
  const indexOfLastLearner = currentPage * learnersPerPage;
  const indexOfFirstLearner = indexOfLastLearner - learnersPerPage;
  const currentLearners = sortedLearners.slice(indexOfFirstLearner, indexOfLastLearner);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Learner Progress Table</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name"
          className="px-4 py-2 border rounded-lg"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="min-w-full bg-white border rounded-lg">
        <thead>
          <tr>
            <th
              className="py-2 px-4 border-b cursor-pointer"
              onClick={() => handleSort("name")}
            >
              Name
            </th>
            <th
              className="py-2 px-4 border-b cursor-pointer"
              onClick={() => handleSort("email")}
            >
              Email
            </th>
            <th
              className="py-2 px-4 border-b cursor-pointer"
              onClick={() => handleSort("progress")}
            >
              Progress
            </th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentLearners.map((learner) => (
            <tr key={learner.id}>
              <td className="py-2 px-4 border-b">{learner.name}</td>
              <td className="py-2 px-4 border-b">{learner.email}</td>
              <td className="py-2 px-4 border-b">{learner.progress}</td>
              <td className="py-2 px-4 border-b">
                <button className="text-blue-600 hover:underline">View</button>{" "}
                |{" "}
                <button className="text-green-600 hover:underline">
                  Edit
                </button>{" "}
                |{" "}
                <button className="text-red-600 hover:underline">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4">
        {Array.from({ length: Math.ceil(learners.length / learnersPerPage) }).map(
          (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`px-4 py-2 border rounded-md ${
                i + 1 === currentPage ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default LearnerTable;
