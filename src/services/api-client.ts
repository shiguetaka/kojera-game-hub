import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{        
        key: '7369afd21f6f4380b4e11870346ad3f8'
    }    
});