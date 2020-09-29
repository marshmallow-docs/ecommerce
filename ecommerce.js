module.exports = [
    {
        title: "Getting Started",
        collapsable: false,
        children: [
            'introduction',
        ],
    }, {
        title: "Server",
        collapsable: false,
        children: prefix('server', [
            'mail-settings',
            'new-project',
            'queues',
        ]),
    }, {
        title: "GIT",
        collapsable: false,
        children: prefix('git', [
            'remove-from-git',
            'submodules',
        ]),
    }
]

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}
