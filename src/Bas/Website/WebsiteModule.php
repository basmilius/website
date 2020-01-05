<?php
/**
 * Copyright (c) 2017 - 2020 - Bas Milius <bas@mili.us>
 *
 * This file is part of the Latte Framework package.
 *
 * For the full copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

declare(strict_types=1);

namespace Bas\Website;

use Bas\Website\Router\RootRouter;
use Latte\Core\Helper\Environment;
use Latte\Core\Module\AbstractModule;

/**
 * Class WebsiteModule
 *
 * @author Bas Milius <bas@mili.us>
 * @package Bas\Website
 * @since 1.0.0
 */
final class WebsiteModule extends AbstractModule
{

	/**
	 * {@inheritdoc}
	 * @author Bas Milius <bas@mili.us>
	 * @since 1.0.0
	 */
	public final function onLoad(): void
	{
		$this->getCappuccino()->addPath($this->getDirectory('resource/view'), 'bas-website');
		$this->getRouter()->all('/', RootRouter::class);
	}

	/**
	 * {@inheritdoc}
	 * @author Bas Milius <bas@mili.us>
	 * @since 1.0.0
	 */
	public final function onInstall(): void
	{
	}

	/**
	 * {@inheritdoc}
	 * @author Bas Milius <bas@mili.us>
	 * @since 1.0.0
	 */
	public final function onUninstall(): void
	{
	}

	/**
	 * {@inheritdoc}
	 * @author Bas Milius <bas@mili.us>
	 * @since 1.0.0
	 */
	public static function shouldUseModule(): bool
	{
		return !Environment::isAdminOrAPI();
	}

}
