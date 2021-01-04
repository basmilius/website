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

namespace Bas\Website\Router;

use Columba\Http\ResponseCode;
use Columba\Router\Context;
use Columba\Router\Response\HtmlResponse;
use Columba\Router\Route\AbstractRoute;
use Columba\Util\StringUtil;
use Latte\Core\Helper\Environment;
use Latte\Core\Router\AbstractRouter;

/**
 * Class RootRouter
 *
 * @author Bas Milius <bas@mili.us>
 * @package Bas\Website\Router
 * @since 1.0.0
 */
final class RootRouter extends AbstractRouter
{

	/**
	 * RootRouter constructor.
	 *
	 * @author Bas Milius <bas@mili.us>
	 * @since 1.0.0
	 */
	public function __construct()
	{
		parent::__construct();

		$this->redirect('/about', '/');

		$this->get('/', [$this, 'onGetAbout']);
		$this->get('/projects', [$this, 'onGetProjects']);
		$this->get('/projects/weather-icons', [$this, 'onGetProjectsWeatherIcons']);
		$this->get('/contact', [$this, 'onGetContact']);
	}

	/**
	 * Invoked when GET /about is requested.
	 *
	 * @return string
	 * @author Bas Milius <bas@mili.us>
	 * @since 1.0.0
	 */
	protected final function onGetAbout(): string
	{
		return $this->render('@bas-website/content/about.twig');
	}

	/**
	 * Invoked when GET /projects is requested.
	 *
	 * @return string
	 * @author Bas Milius <bas@mili.us>
	 * @since 1.0.0
	 */
	protected final function onGetProjects(): string
	{
		return $this->render('@bas-website/content/projects.twig');
	}

	/**
	 * Invoked when GET /projects/weather-icons is requested.
	 *
	 * @return string
	 * @author Bas Milius <bas@mili.us>
	 * @since 1.0.0
	 */
	protected final function onGetProjectsWeatherIcons(): string
	{
		return $this->render('@bas-website/content/weather-icons.twig', [
			'icons' => [
				['id' => 'clear-day', 'name' => 'Clear (day)'],
				['id' => 'clear-night', 'name' => 'Clear (night)'],
				['id' => 'cloudy', 'name' => 'Cloudy'],
				['id' => 'overcast', 'name' => 'Overcast'],
				['id' => 'drizzle', 'name' => 'Drizzle'],
				['id' => 'hail', 'name' => 'Hail'],
				['id' => 'mist', 'name' => 'Mist'],
				['id' => 'partly-cloudy-day', 'name' => 'Partly cloudy (day)'],
				['id' => 'partly-cloudy-day-drizzle', 'name' => 'Partly cloudy drizzle (day)'],
				['id' => 'partly-cloudy-day-hail', 'name' => 'Partly cloudy hail (day)'],
				['id' => 'partly-cloudy-day-rain', 'name' => 'Partly cloudy rain (day)'],
				['id' => 'partly-cloudy-day-snow', 'name' => 'Partly cloudy snow (day)'],
				['id' => 'partly-cloudy-night', 'name' => 'Partly cloudy (night)'],
				['id' => 'partly-cloudy-night-drizzle', 'name' => 'Partly cloudy drizzle (night)'],
				['id' => 'partly-cloudy-night-hail', 'name' => 'Partly cloudy hail (night)'],
				['id' => 'partly-cloudy-night-rain', 'name' => 'Partly cloudy rain (night)'],
				['id' => 'partly-cloudy-night-snow', 'name' => 'Partly cloudy snow (night)'],
				['id' => 'rain', 'name' => 'Rain'],
				['id' => 'snow', 'name' => 'Snow'],
				['id' => 'thunderstorms', 'name' => 'Thunderstorms'],
				['id' => 'thunderstorms-day', 'name' => 'Thunderstorms (day)'],
				['id' => 'thunderstorms-night', 'name' => 'Thunderstorms (night)'],
				['id' => 'tornado', 'name' => 'Tornado'],
				['id' => 'wind', 'name' => 'Wind']
			]
		]);
	}

	/**
	 * Invoked when GET /contact is requested.
	 *
	 * @return string
	 * @author Bas Milius <bas@mili.us>
	 * @since 1.0.0
	 */
	protected final function onGetContact(): string
	{
		return $this->render('@bas-website/content/contact.twig');
	}

	/**
	 * {@inheritdoc}
	 * @author Bas Milius <bas@mili.us>
	 * @since 1.5.0
	 */
	public function onExecute(AbstractRoute $route, Context $context): void
	{
		parent::onExecute($route, $context);

		$this->getTwig()->addGlobal('is_webp_supported', Environment::isWebPSupported());
		$this->getAssets()->clear();
	}

	/**
	 * {@inheritdoc}
	 * @author Bas Milius <bas@mili.us>
	 * @since 1.5.0
	 */
	public function onNotFound(string $requestPath, Context $context): bool
	{
		if (StringUtil::startsWith($_SERVER['REQUEST_URI'] ?? '', '/manifest.json'))
			return false;

		if (StringUtil::startsWith($_SERVER['REQUEST_URI'] ?? '', '/offline.html'))
			return false;

		if (StringUtil::startsWith($_SERVER['REQUEST_URI'] ?? '', '/robots.txt'))
			return false;

		if (StringUtil::startsWith($_SERVER['REQUEST_URI'] ?? '', '/resource'))
			return false;

		$context->setResponseCode(ResponseCode::NOT_FOUND);
		$context->setResponse(new HtmlResponse(), $this->render('@bas-website/content/404', [
			'path' => $_SERVER['REQUEST_URI']
		]));

		return true;
	}

}
