import React from 'react';
import { scholarships } from '../../data/data2';
import { Link } from 'react-router-dom';

// const SchemeCard = ({ schemeName, schemeImage, description }) => {
//     return (
//         <div className="max-w-sm mx-auto mb-6 bg-[#FFF2DB] rounded-lg overflow-hidden shadow-md cursor-pointer">
//             <img className="w-full h-32 object-cover" src={schemeImage} alt={schemeName} />
//             <div className="p-4">
//                 <h2 className="text-xl font-semibold mb-2">{schemeName}</h2>
//                 <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
//             </div>
//         </div>
//     );
// };
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function SchemeCard({ schemeName, schemeImage, description }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <img className="w-full h-32 object-cover" src={schemeImage} alt={schemeName} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {schemeName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <p className=" text-gray-600 line-clamp-3">{description}</p>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

const Schemes = () => {
    return (
        <div className="flex flex-wrap gap-[60px] justify-center p-20">
            {scholarships.map((scholarship) => (
                <Link to={`/schemes/${scholarship.id}`} key={scholarship.id}>
                    <SchemeCard
                        schemeName={scholarship.name}
                        schemeImage={scholarship.image}
                        description={scholarship.description}
                    />
                </Link>
            ))}
        </div>
    );
};

export default Schemes;
