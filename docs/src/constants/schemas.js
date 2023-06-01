export function stringify(json) {
    return JSON.stringify(json, null, 4);
}

export const image_ref = {
    type: "image",
    id: "UUID",
};

export const artist_ref = {
    type: "artist",
    id: "UUID",
};

export const category_ref = {
    type: "category",
    id: "UUID",
};

export const character_ref = {
    type: "character",
    id: "UUID",
};

export const user_ref = {
    type: "user",
    id: "UUID",
};

export const discord_ref = {
    type: "discord-user",
    id: "String",
};

export const user_public_schema = {
    type: "user",
    id: "UUID",
    attributes: {
        username: "String",
        nickname: "String?",
        biography: "String?",
        avatarImage: "URL?",
        permissions: {
            isActive: "Boolean",
            isStaff: "Boolean",
            isSuperuser: "Boolean",
        },
        timestamps: {
            joined: "ISO 8601",
        },
    },
    relationships: {
        following: {
            meta: {
                count: "Integer",
            },
            data: [user_ref],
            links: {
                self: "https://api.nekosapi.com/v2/users/<uuid:pk>/relationships/following",
                related:
                    "https://api.nekosapi.com/v2/users/<uuid:pk>/following",
            },
        },
        followers: {
            meta: {
                count: "Integer",
            },
            data: [user_ref],
            links: {
                self: "https://api.nekosapi.com/v2/users/<uuid:pk>/relationships/followers",
                related:
                    "https://api.nekosapi.com/v2/users/<uuid:pk>/followers",
            },
        },
        followedArtists: {
            meta: {
                count: "Integer",
            },
            data: [artist_ref],
            links: {
                self: "https://api.nekosapi.com/v2/users/<uuid:pk>/relationships/followed-artists",
                related:
                    "https://api.nekosapi.com/v2/users/<uuid:pk>/followed-artists",
            },
        },
        followedCharacters: {
            meta: {
                count: "Integer",
            },
            data: [character_ref],
            links: {
                self: "https://api.nekosapi.com/v2/users/<uuid:pk>/relationships/followed-characters",
                related:
                    "https://api.nekosapi.com/v2/users/<uuid:pk>/followed-characters",
            },
        },
        followedCategories: {
            meta: {
                count: "Integer",
            },
            data: [category_ref],
            links: {
                self: "https://api.nekosapi.com/v2/users/<uuid:pk>/relationships/followed-categories",
                related:
                    "https://api.nekosapi.com/v2/users/<uuid:pk>/followed-categories",
            },
        },
        likedImages: {
            meta: {
                count: "Integer",
            },
            data: [image_ref],
            links: {
                self: "https://api.nekosapi.com/v2/users/<uuid:pk>/relationships/liked-images",
                related:
                    "https://api.nekosapi.com/v2/users/<uuid:pk>/liked-images",
            },
        },
    },
    links: {
        self: "https://api.nekosapi.com/v2/users/<uuid:pk>",
    },
};

export const user_private_schema = {
    type: "user",
    id: "UUID",
    attributes: {
        username: "String",
        name: {
            first: "String?",
            last: "String?",
        },
        nickname: "String?",
        biography: "String?",
        avatarImage: "URL?",
        email: "String",
        secretKey: "String",
        permissions: {
            isActive: "Boolean",
            isStaff: "Boolean",
            isSuperuser: "Boolean",
        },
        timestamps: {
            joined: "ISO 8601",
        },
    },
    relationships: {
        following: {
            meta: {
                count: "Integer",
            },
            data: [user_ref],
            links: {
                self: "https://api.nekosapi.com/v2/users/<uuid:pk>/relationships/following",
                related:
                    "https://api.nekosapi.com/v2/users/<uuid:pk>/following",
            },
        },
        followers: {
            meta: {
                count: "Integer",
            },
            data: [user_ref],
            links: {
                self: "https://api.nekosapi.com/v2/users/<uuid:pk>/relationships/followers",
                related:
                    "https://api.nekosapi.com/v2/users/<uuid:pk>/followers",
            },
        },
        followedArtists: {
            meta: {
                count: "Integer",
            },
            data: [artist_ref],
            links: {
                self: "https://api.nekosapi.com/v2/users/<uuid:pk>/relationships/followed-artists",
                related:
                    "https://api.nekosapi.com/v2/users/<uuid:pk>/followed-artists",
            },
        },
        followedCharacters: {
            meta: {
                count: "Integer",
            },
            data: [character_ref],
            links: {
                self: "https://api.nekosapi.com/v2/users/<uuid:pk>/relationships/followed-characters",
                related:
                    "https://api.nekosapi.com/v2/users/<uuid:pk>/followed-characters",
            },
        },
        followedCategories: {
            meta: {
                count: "Integer",
            },
            data: [category_ref],
            links: {
                self: "https://api.nekosapi.com/v2/users/<uuid:pk>/relationships/followed-categories",
                related:
                    "https://api.nekosapi.com/v2/users/<uuid:pk>/followed-categories",
            },
        },
        likedImages: {
            meta: {
                count: "Integer",
            },
            data: [image_ref],
            links: {
                self: "https://api.nekosapi.com/v2/users/<uuid:pk>/relationships/liked-images",
                related:
                    "https://api.nekosapi.com/v2/users/<uuid:pk>/liked-images",
            },
        },
        savedImages: {
            meta: {
                count: "Integer",
            },
            data: [image_ref],
            links: {
                self: "https://api.nekosapi.com/v2/users/<uuid:pk>/relationships/saved-images",
                related:
                    "https://api.nekosapi.com/v2/users/<uuid:pk>/saved-images",
            },
        },
        discord: {
            links: {
                self: "https://api.nekosapi.com/v2/users/<uuid:pk>/relationships/discord",
                related: "https://api.nekosapi.com/v2/users/<uuid:pk>/discord",
            },
            data: discord_ref,
        },
    },
    links: {
        self: "https://api.nekosapi.com/v2/users/<uuid:pk>",
    },
};

export const image_schema = {
    type: "image",
    id: "UUID",
    attributes: {
        file: "URL",
        title: "String",
        colors: {
            dominant: "String?",
            palette: ["String?"],
        },
        source: {
            name: "String?",
            url: "URL?",
        },
        dimens: {
            height: "Integer?",
            width: "Integer?",
            aspectRatio: "String?",
            orientation: "String?",
        },
        isOriginal: "Boolean",
        verificationStatus: "String",
        ageRating: "String?",
        metadata: {
            mimetype: "String?",
            fileSize: "Integer?",
        },
        timestamps: {
            created: "ISO 8601",
            updated: "ISO 8601",
        },
    },
    relationships: {
        uploader: {
            links: {
                self: "https://api.nekosapi.com/v2/images/:id/relationships/uploader",
                related: "https://api.nekosapi.com/v2/images/:id/uploader",
            },
            data: user_ref,
        },
        artist: {
            links: {
                self: "https://api.nekosapi.com/v2/images/:id/relationships/artist",
                related: "https://api.nekosapi.com/v2/images/:id/artist",
            },
            data: artist_ref,
        },
        categories: {
            meta: {
                count: "Integer",
            },
            data: [category_ref],
            links: {
                self: "https://api.nekosapi.com/v2/images/:id/relationships/categories",
                related: "https://api.nekosapi.com/v2/images/:id/categories",
            },
        },
        characters: {
            meta: {
                count: "Integer",
            },
            data: [character_ref],
            links: {
                self: "https://api.nekosapi.com/v2/images/:id/relationships/characters",
                related: "https://api.nekosapi.com/v2/images/:id/characters",
            },
        },
        likedBy: {
            meta: {
                count: "Integer",
            },
            data: [user_ref],
            links: {
                self: "https://api.nekosapi.com/v2/images/:id/relationships/liked-by",
                related: "https://api.nekosapi.com/v2/images/:id/liked-by",
            },
        },
    },
    links: {
        self: "https://api.nekosapi.com/v2/images/:id",
    },
};

export const artist_schema = {
    type: "artist",
    id: "UUID",
    attributes: {
        name: "String",
        aliases: ["String"],
        imageUrl: "URL?",
        officialLinks: ["URL"],
        timestamps: {
            created: "ISO 8601",
            updated: "ISO 8601",
        },
    },
    relationships: {
        images: {
            meta: {
                count: "Integer",
            },
            data: [image_ref],
            links: {
                self: "https://api.nekosapi.com/v2/artists/:id/relationships/images",
                related: "https://api.nekosapi.com/v2/artists/:id/images",
            },
        },
        followers: {
            meta: {
                count: "Integer",
            },
            data: [user_ref],
            links: {
                self: "https://api.nekosapi.com/v2/artists/:id/relationships/followers",
                related: "https://api.nekosapi.com/v2/artists/:id/followers",
            },
        },
    },
    links: {
        self: "https://api.nekosapi.com/v2/artists/:id",
    },
};

export const character_schema = {
    type: "character",
    id: "UUID",
    attributes: {
        name: {
            first: "String?",
            last: "String?",
            aliases: ["String"],
        },
        description: "String?",
        gender: "String?",
        species: "String?",
        ages: ["Integer"],
        birthDate: "String?",
        nationality: "String?",
        occupations: ["String"],
        timestamps: {
            created: "ISO 8601",
            updated: "ISO 8601",
        },
    },
    relationships: {
        images: {
            meta: {
                count: "Integer",
            },
            data: [image_ref],
            links: {
                self: "https://api.nekosapi.com/v2/characters/:id/relationships/images",
                related: "https://api.nekosapi.com/v2/characters/:id/images",
            },
        },
        followers: {
            meta: {
                count: "Integer",
            },
            data: [user_ref],
            links: {
                self: "https://api.nekosapi.com/v2/characters/:id/relationships/followers",
                related: "https://api.nekosapi.com/v2/characters/:id/followers",
            },
        },
    },
    links: {
        self: "https://api.nekosapi.com/v2/characters/:id",
    },
};

export const category_schema = {
    type: "category",
    id: "UUID",
    attributes: {
        name: "String",
        description: "String",
        sub: "String",
        isNsfw: "Boolean",
        timestamps: {
            created: "ISO 8601",
            updated: "ISO 8601",
        },
    },
    relationships: {
        images: {
            meta: {
                count: "Integer",
            },
            data: [
                image_ref
            ],
            links: {
                self: "https://api.nekosapi.com/v2/categories/:id/relationships/images",
                related:
                    "https://api.nekosapi.com/v2/categories/:id/images",
            },
        },
        followers: {
            meta: {
                count: "Integer",
            },
            data: [user_ref],
            links: {
                self: "https://api.nekosapi.com/v2/categories/:id/relationships/followers",
                related:
                    "https://api.nekosapi.com/v2/categories/:id/followers",
            },
        },
    },
    links: {
        self: "https://api.nekosapi.com/v2/categories/:id",
    },
};

export const pagination = (items, included = []) => {
    return {
        links: {
            first: "URL",
            last: "URL",
            next: "URL?",
            prev: "URL?",
        },
        data: items,
        included: included,
        meta: {
            pagination: {
                count: "Integer",
                limit: "Integer",
                offset: "Integer",
            },
        },
    };
};

export const resource = (data) => {
    return {
        data: data,
    };
};