const ProjectsAPI = {
    projects: [
        {
            id: 1,
            title: 'Summer Sixteen',
            summary: 'Lorem lipsum',
            slug: 'summer-sixteen'
         },{
            id: 2,
            title: 'Love Yourz',
            summary: 'J Cole',
            slug: 'love-yourz'
         },{
            id: 3,
            title: 'Tripping',
            summary: 'French Montana',
            slug: 'tripping'
         },{
            id: 4,
            title: 'Outburst004',
            summary: 'Manga',
            slug: 'outburst004'
        }
    ],
    all: function() { return this.projects },
    get: function(id) {
        const isProject = p => p.id === id
        return this.projects.find(isProject)
    }
}

export default ProjectsAPI;
