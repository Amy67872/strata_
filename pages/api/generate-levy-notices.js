// pages/api/generate-levy-notices.js

export default async function handler(req, res) {
    if (req.method === 'GET') {
      try {
        const unitOwners = [
          { name: 'John Doe', unit: 101 },
          { name: 'Jane Smith', unit: 102 },
          { name: 'Michael Johnson', unit: 103 },
          { name: 'Emily Davis', unit: 104 },
          { name: 'Daniel Lee', unit: 105 },
        ];
  
        const currentDate = new Date();
        const levyDueDate = new Date();
        levyDueDate.setMonth(currentDate.getMonth() + 3);  // Due in 3 months
  
        unitOwners.forEach(owner => {
          console.log(`Levy notice for Unit ${owner.unit} (${owner.name}) is due on ${levyDueDate.toLocaleDateString()}`);
        });
  
        res.status(200).json({ message: 'Levy notices generated and logged successfully' });
      } catch (error) {
        console.error('Error generating levy notices:', error);
        res.status(500).json({ message: 'Error generating levy notices' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  